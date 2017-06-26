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


angular.module("Demo", [])
    .controller("DemoController", $scope => {
        $scope.items = app.items;
        $scope.add = function(newItem) {
            try {
                app.validateItem(newItem);
                app.addItem(newItem);
            } catch (err) {
                alert(err);
            }
        }
    });