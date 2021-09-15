class Collection {
  constructor(name: string) {
    this.name = name;
    this.docs = [];
  }

  /**
   * The save method is used to retrieve records from the database.
   * @param {object} -
   *
   */
  find() {}

  /**
   * method used to sort the order of records returned from the find() method
   * there are two sort orders namely; positive, negative
   * @param {number} - 1 represents ascending, -1 represents descending order
   */
  sort() {}

  /**
   * The save method is used to save new records (documents) to the database.
   * @param {object}
   *
   */
  save() {}

  /**
   * Method used to update a particular document in a collection
   * @param {string}
   *
   */
  delete() {}

  /**
   * Method used to update a particular document in a collection
   * @param {string}
   *
   */
  update() {}
}

class CreateDatabase {
  constructor(name: string) {
    this.name = name; //The name of the database instance
    this.collections = []; // This is where all the collections will live
  }

  /***
   * Method used to create a new collection and add it to the database
   * @param {string} - The name of the collection to be created.
   */
  createCollection(name: string) {
    const _collection = new Collection(name);
    //add the new created collection to the database's
    // list of collections...
    this.collections.push(_collection)
  }

  /**
   * Used to delete a specific collection from the
   * database...
   * @param {string} - The name of the collection to be deleted...
   */
  deleteCollection(name: string) {}
}