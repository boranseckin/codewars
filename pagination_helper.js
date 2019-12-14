// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
    this.length = collection.length;
    this.itemsPerPage = itemsPerPage;
    this.numberOfPages = Math.ceil((this.length - 1) / this.itemsPerPage);
  
    this.chunkedCollection = collection.reduce((reducedCollection, item, index) => {
        const chunkIndex = Math.floor(index / itemsPerPage);
        
        if (!reducedCollection[chunkIndex]) {
        reducedCollection[chunkIndex] = [];
        }
        
        reducedCollection[chunkIndex].push(item);
        return reducedCollection;
    }, []);
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
    return this.length;
}
  
// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
    return this.numberOfPages;
}
  
// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    if (this.chunkedCollection[pageIndex]) {
        return this.chunkedCollection[pageIndex].length;
    }
    return -1;
}
  
// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
    if (itemIndex > this.length -1 || itemIndex < 0) {
        return -1;
    } else if (itemIndex === 0) {
        return 0;
    }
    return Math.ceil(itemIndex / this.itemsPerPage) - 1;
}
