import  {Schema, model} from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const taskSchema = new Schema({ //le indica a mongoose la forma en la que se van a guardar los datos
    title: {
        type: String,
        required: true,
        trim: true //quita los espacios en blanco
    },
    description: {
        type: String,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    },
}, {versionKey: false, timestamps: true}) //timestamps: true, para que guarde la fecha de creacion y actualizacion de los datos (createdAt, updatedAt)


taskSchema.plugin(mongoosePaginate); //para poder paginar los datos 
export default model('Task', taskSchema); //para poder interactuar con el codigo