"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
// Este archivo sirve para definir el servidor en donde va a correr la api
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
//Routes
const index_routes_1 = __importDefault(require("./routes/index.routes")); //sin {} importa todo el modulo
const post_routes_1 = __importDefault(require("./routes/post.routes"));
class App {
    constructor(port) {
        this.port = port;
        this.app = (0, express_1.default)();
        this.settings();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json()); //Sirve para decir que puedo recibir json
        //this.app.use(express.urlencoded({extended: false})); //Sirve para decir que voy a poder recibir datos de formularios como json
    }
    routes() {
        this.app.use(index_routes_1.default);
        this.app.use('/posts', post_routes_1.default);
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }
    //Correr servidor
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get('port'));
            console.log('Server on port', this.app.get('port'));
        });
    }
}
exports.App = App;
