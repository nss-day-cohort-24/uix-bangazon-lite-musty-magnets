``` js
// This button can take a class name, label, and an onClick function.
<Buttons class={`type-class-here`} label={"Button Label"} onClick={() => { props.function() }}/>
```
``` js
// Here are examples of classes(must be strings) and labels(must be strings) that can be passed into the button above.
<div class="d-flex justify-content-around flex-wrap row"> 
    <Buttons class={`btn-cancel`} label={"Cancel"} function={this.function} />
    <Buttons class={`btn-list-item`} label={"List Item"} />
    <Buttons class={`btn-account-save`} label={"Save"} />
    <Buttons class={`btn-keep-shopping`} label={"Continue Shopping"} />
    <Buttons class={`btn-add-to-cart`} label={"Add to Cart"} />
    <Buttons class={`btn-checkout`} label={"Checkout"} />
    <Buttons class={`btn-place-order`} label={"Place Order"} />
    <Buttons class={`btn-remove`} label={"Remove"} />
    <Buttons class={`btn-edit`} label={"Edit"} />
</div>
```
