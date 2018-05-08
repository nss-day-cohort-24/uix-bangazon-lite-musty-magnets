```js

    <ProductItem 
            image = "https://img.etsystatic.com/il/419a72/1084610244/il_570xN.1084610244_i1r5.jpg?version=0"
            price = "$15.00"
            quantity = "1"
            name = "Product Name here"
            category = "Art"
            description = "Christian wall art Matthew 5:16, let your light shine before others, bible verse, bible psalm, bible quote, matthew print, bible verse wall art."
            />

```
```js
// Example of what the modal for the prodcut detail view looks like

<div>
    <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>          
        <Modal className="Product-Item-modal" isOpen="" toggle="" className="">
          <ModalHeader toggle="btn-close"></ModalHeader>
          <ModalBody>
                
            <div className="Product-item">
            <Button className="btn-close " label="Close X" onClick={() => { props.function() }}>Close X</Button> 
            
                <div className="row">
                
                    <div className="col">
                        <img src="https://img.etsystatic.com/il/419a72/1084610244/il_570xN.1084610244_i1r5.jpg?version=0" className="Product-item-img" alt=""></img>
                        
                        <div className="row Product-item-row">
                            <div className="col text-left"> $15.00 </div>
                            <div className="col text-right"> QTY 1</div>
                        </div>
                        
                    </div>

                    <div className="col">
                        <h2>Product Name here</h2>
                        <Label>Art</Label>
                        <p>Christian wall art Matthew 5:16, let your light shine before others, bible verse, bible psalm, bible quote, matthew print, bible verse wall art.</p>
                    </div>

                </div>
            </div>
            
                    
          </ModalBody>
          
          <ModalFooter>
            <Button color="btn-add-to-cart" onClick={this.toggle}>Add to cart</Button>{' '}
            <Buttons className={`btn-cancel`} label={"Cancel"} function="function()" />
          </ModalFooter>
         
        </Modal>
       
       </div>
      ```