// Este archivo sirve para definir el servidor en donde va a correr la api
import express, {Application} from 'express';
import morgan from "morgan";

//Routes
import IndexRoutes from "./routes/index.routes"; //sin {} importa todo el modulo
import PostRoutes from "./routes/post.routes";

export class App{

    private app: Application;

    constructor(private port?: number | string) { //la variable puede ser de dos tipos, si le pongo private crea una variable privada para toda la clase (global)
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json()); //Sirve para decir que puedo recibir json
        //this.app.use(express.urlencoded({extended: false})); //Sirve para decir que voy a poder recibir datos de formularios como json
    }

    routes() {
        this.app.use(IndexRoutes);
        this.app.use('/posts',PostRoutes);
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    //Correr servidor
    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }

}