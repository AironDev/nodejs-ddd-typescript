const _serializeSingleTutorial = tutorial => {
  return {
    id: tutorial.id,
    title: tutorial.title,
    content: tutorial.content,
    author: tutorial.author,
  };
};

export class TutorialContract {
  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleTutorial);
    }
    return _serializeSingleTutorial(data);
  }
}
