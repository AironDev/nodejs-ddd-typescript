import {Tutorial} from '../../../../domain/tutorial/tutorial.entity';
import mongoose from 'mongoose';

type ITutorial = Tutorial;

const TutorialSchema = new mongoose.Schema<ITutorial>(
  {
    title: {type: String},
    content: {type: String},
    isPublished: {type: Boolean, required: true},
    author: {
      type: String,
      required: true,
      // validate: {
      //   validator: () => {},
      //   message: props => `${props.value} is not a valid phone number!`,
      // },
    },
    category: String,
  },
  {timestamps: true}
);

// function checkCredentials(value) {
//   return true;
// }

// const Tutorial = mongoose.model('tutorial', schema);
const TutorialModel = mongoose.model('Tutorial', TutorialSchema);
export {ITutorial, TutorialModel, TutorialSchema};
