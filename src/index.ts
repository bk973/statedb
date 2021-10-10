/**
 * Creates a new database instance
 * @param name {string} - The optional database name.
 */
class CreateDatabase {
      name?: string; //optional
      collections: any[]; 
      /**
       * NOTE: We hope to add another class member to accept an options Object for config purposes.
       */
  constructor(name: string) {
      this.name = name;
      this. collections = []; //This is where collections will live
  }
  createCollection(name: string, shape: object): void {
      //create a new collection...
      let _collection = new Collection(name, shape);
      
      //check if a collection with such a name already exists in the collections array
      for(let col of this.collections) {
           if(_collection.name === col.name) throw new Error(`
              Looks like a collection with such a name already exists.
              Try using a different name for your collection.
           `)
      }

      //Insert the new collection in the database (Collections array)...
      this.collections.push(_collection) //Push at the end of the array...
  }
}

/**
 * Creates a new collection. This class is only used by CreateDatabase class
 * @param  name  {string} - The name of the collection is a require parameter.
 * @param  shape {Object}  - The shape that will be taken by the data in the collection
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

    id: string;
    data: any;

    constructor(id:string, data:any){
           this.id = id;
           this.data = data;

    id: string; //required
    data: object; //required

    constructor(id: string, data: object){
        this.id = id;
        this.data = data;
    }
}


//text
const mydb = new CreateDatabase('mydb');
mydb.createCollection('Users', {});

console.log(mydb.collections);