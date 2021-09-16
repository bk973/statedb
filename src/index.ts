/**
 * Creates a new database instance
 * @param name {string} - The optional database name.
 */
class CreateDatabase {
      name?: string; //optional
      collections: string[]; 
      /**
       * NOTE: We hope to add another class member to accept an options Object for config purposes.
       */
  constructor(name?: string) {
      this.name = name;
      this. collections = []; //This is where collections will live
  }
}

/**
 * Creates a new collection. This class is only used by CreateDatabase class
 * @param  name  {string} - The name of the collection is a require parameter.
 * @param  shape {Object}  - The shape that will be taken by the data in the collection
 */
class Collection {
    name: string; //required
    shape: object; //required
  constructor(name: string, shape: object) {
    this.name = name;
    this.shape = shape;
  }
}

/**
 * Create a new record. This class is only used by Collection class.
 * @param record {Object}  - A new object holding the data to be inserted into a collection.
 */
class Field {
    id: string; //required
    data: object; //required

    constructor(id: string, data: object){
        this.id = id;
        this.data = data;
    }
}