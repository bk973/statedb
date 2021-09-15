/**
 * Creates a new database instance
 * @param {string} name - The optional database name.
 */
class CreateDatabase {
  constructor(name?: string = '') {
         this.name = name; //Optional name of the database
         this.collections: [] //collections array
  }
  /**
   * Creates a new collection by calling new Collection
   * @param name {string} - Required anme of a collection.
   * @param shape {Object} - The shape of the data that will be taken in by the new collection.
   */
  createCollection(name: string, shape): void {
    //create a new Collection instance...
     const _collection = new Collection;

    //Check if the name specified doesn't already exist in the database

    //Insert it into the database...
  }

  /**
   * Deletes a specified collection from the database
   * @param name {string} - The name of the collection to be deleted
   */
  deleteCollection(name: string): void{
     //Check if the specified name really exists in the database
  }
  
  /**
   * Clones a specified collection
   * @param name {string} - The name of the collection to be cloned.
   */
  cloneCollection(name: string){

  }

  /**
   * Returns the name of the database
   */
  name(): string {
      return this.name;
  }
}

/**
 * Creates a new collection. This class is only used by CreateDatabase class
 * @param {string} name - The name of the collection is a require parameter.
 * @param {Object} shape - The shape that will be taken by the data in the collection
 */
class Collection {
  constructor() {

  }
}

/**
 * Create a new record. This class is only used by Collection class.
 * @param {Object} record - A new object holding the data to be inserted into a collection.
 */
class Field {
    constructor(){

    }
}