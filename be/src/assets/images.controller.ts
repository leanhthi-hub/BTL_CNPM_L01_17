import { Controller, Post, UseGuards, UseInterceptors, Req, UploadedFile, Get, Param, Res, Header, BadRequestException, Headers, UploadedFiles } from "@nestjs/common";
import { AnyFilesInterceptor, FileInterceptor } from "@nestjs/platform-express";
import { ApiBody, ApiConsumes, ApiTags } from "@nestjs/swagger";
import { diskStorage } from "multer";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import * as fs from 'fs';
import { ApiMultiFile } from "src/utils/multiple-files.decorator";
import { resolveSoa } from "dns";

@ApiTags("Assets")
@Controller('/assets/img')
export class ImagesController {
  constructor(
  ) {}
 
  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
//   @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploaded/img',
      filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname) //Appending extension
      }
    }), 
    fileFilter : (req, file, callback) => {
      if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new BadRequestException('Only image files are allowed!'), false);
      }
      callback(null, true);
    }
  }))
  async uploadImage(@Headers() headers: any, @UploadedFile() file: Express.Multer.File) {
    return headers.host + "/assets/img/"+file.filename
  }

  @Post("list")
  @ApiConsumes('multipart/form-data')
  @ApiMultiFile() 
//   @UseGuards(JwtAuthGuard)
  @UseInterceptors(AnyFilesInterceptor({
    storage: diskStorage({
      destination: './uploaded/img'
    }), 
    fileFilter : (req, file, callback) => {
      if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new BadRequestException('Only image files are allowed!'), false);
      }
      callback(null, true);
    }
  }))
  async uploadListImages(@Headers() headers: any, @UploadedFiles() files: Array<Express.Multer.File>) {
    return files.map(file => headers.host + "/assets/img/"+ file.filename);
  }
  @Get(":filename")
  @Header('content-type', 'image/*')
    async display(@Param("filename") filename: string, @Res() res){
      res.sendFile(filename, { root: './uploaded/img' })
    }
}