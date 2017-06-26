let app = {
    items: [],
    addItem(item) {
        this.items.push(item);
    },
    validateItem(item) {
        if (item == "")
            throw new Error("error, can't add blank item");
        if (item.length < 5)
            throw new Error("items must be more than 5 characters");
    }
}


$(() => {
    const itemTemplate = $("#itemTemplate").html();
    let $items = $("#items");
    let $add = $("#add");
    let $newItem = $("#newItem");

    $add.on("click", () => {
        let newItem = $newItem.val();
        try {
            app.validateItem(newItem);
            app.addItem(newItem);
            $items.append(itemTemplate.replace("{{newItem}}", newItem));
        } catch (err) {
            alert(err);
        }
    });
});