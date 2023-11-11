// Incluir as bibliotecas
// Upload de arquivos
const multer  = require('multer');

// Realizar upload da imagem
module.exports = (multer({

    // diskStorage permite manipular locar para salvar a imagem
    storage: multer.diskStorage({

        // Local para salvar a imagem
        destination: (req, file, cb) => {
            cb(null, './public/images/products')
        },

        // Nome que deve ser atribuido ao arquivo
        filename: (req, file, cb) => {
            cb(null, Date.now().toString() + "_" + file.originalname)
        }
    }),

    // Validar a extensão do arquivo
    fileFilter: (req, file, cb) => {

        // Verificar se a extensão da imagem enviada pelo usuário está no array de extensões
        const extesaoImg = ['image/png', 'image/jpg', 'image/jpeg'].find(formatoAceito => formatoAceito == file.mimetype);

        // Retornar TRUE quando a extensão da imagem é válida
        if(extesaoImg){
            return cb(null, true);
        }

        // Retornar FALSE quando a extensão da imagem é válida
        return cb(null, false);
    }
}))