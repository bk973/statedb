import Collection from "./collection";

/**
 * Creates a new database instance
 * @param name {string} - The optional database name.
 */
export default class CreateDatabase {
    name?: string; //optional
    collections: any[]; 
    /**
     * NOTE: We hope to add another class member to accept an options Object for config purposes.
     */
constructor(name: string) {
    this.name = name;
    this. collections = []; 
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