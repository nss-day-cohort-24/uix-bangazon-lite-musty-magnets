import React from 'react';
import SearchResultsTemp from './SearchResultsTemp';

class SearchResults extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          productArray:[] // <<<<<< Not sure if this needs set
        }
        console.log('data', this.state);
      } 
   render () {
       return(

            <div>
                <SearchResultsTemp data={this.state.productArray} />
            </div>
       )
   }
}

export default SearchResults;