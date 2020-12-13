import mongoose from 'mongoose';
import FoodSchema, { IFood } from '../repositories/schemas/food.schema';
import ListSchema, { IList } from '../repositories/schemas/list.schema';
import TemplateSchema, {
  ITemplate,
} from '../repositories/schemas/template.schema';

// Connecting on database;
mongoose.connect(
  `mongodb+srv://geraldo:admin_123@shoplistcluster.438cq.mongodb.net/shoplistDb?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err: any) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected');
    }
  },
);
const TemplateModel = mongoose.model<ITemplate>('Template', TemplateSchema);
const ListModel = mongoose.model<IList>('List', ListSchema);
const FoodModel = mongoose.model<IFood>('Food', FoodSchema);

export { TemplateModel, ListModel, FoodModel };
