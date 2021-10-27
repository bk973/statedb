import Collection from "./collection";

/**
 * Creates a new database instance
 * @param name {string} - The optional database name.
 */
export default class CreateDatabase {
    name?: string; //optional
    collections: any[]; 
constructor(name: string) {
    this.name = name;
    this.collections = []; 

    //bind (this) to instance methods...
    this.createCollection = this.createCollection.bind(this);
    this.collection = this.collection.bind(this);
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
collection(name: string){
    let _col = null;
     for(let c of this.collections){
         if(name !== c.name) continue;
         _col = c;
     }
     return _col;
  }
}