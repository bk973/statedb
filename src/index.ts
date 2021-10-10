/**
 * Creates a new database instance
 * @param {string} name - The optional database name.
 */
class CreateDatabase {
  constructor() {

  }
}

/**
 * Creates a new collection. This class is only used by CreateDatabase class
 * @param {string} name - The name of the collection is a require parameter.
 * @param {Object} shape - The shape that will be taken by the data in the collection
 */
class Collection {
  name: string;
  shape: any; 

  constructor(name: string, shape:any) {
       this.name = name; //Required name of the collection...
       this.shape = shape; //The shape that will be adopted by the incoming data...
       this.collectionName = this.collectionName.bind(this);
  }
  collectionName():string{
      return this.name;
  }
  /**
   * Inserts new data into the collection
   * @param data {Object} An object containing data to be saved to the collection
   */
  save(/**data */): void{
      //evaluates new Field(id, data) NOTE: id must be unique for every new record
      
      //generate a random id here
      
  }
  /**
   * Queries the collection for data based on the query object.
   * @param query {Object} an object describing the type of query that will be used to retrieve data.
   */
  find(/**Query {} */): any{

  }

  /**
   * Return a single record from a collection based on the parameters
   */
  findOne(/**params */){

  }

  /**
   * Return a single record from the collection based on its unique ID.
   * @param id {string} the ID of the record to be found.
   */
  findById(/**id */){

  }

}

/**
 * Create a new record. This class is only used by Collection class.
 * @param {Object} record - A new object holding the data to be inserted into a collection.
 */
class Field {
    id: string;
    data: any;

    constructor(id:string, data:any){
           this.id = id;
           this.data = data;
    }
}