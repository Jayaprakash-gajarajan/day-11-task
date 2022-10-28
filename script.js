var div = document.createElement("div");
div.setAttribute("class", "container");
var h = document.createElement("h1");
h.setAttribute("id", "count");
h.innerHTML = 10;
div.append(h);
document.body.append(div);

var value = 10;
setTimeout(function () {
    value--
    if (value >= 0) {
        id = document.getElementById("count")
        id.innerHTML = value
    }
    if (value == 0) {
        id.innerHTML = "Happy New Year";
    }
    setTimeout(function () {
        value--
        if (value >= 0) {
            id = document.getElementById("count")
            id.innerHTML = value
        }
        if (value == 0) {
            id.innerHTML = "Happy New Year";
        }
        setTimeout(function () {
            value--
            if (value >= 0) {
                id = document.getElementById("count")
                id.innerHTML = value
            }
            if (value == 0) {
                id.innerHTML = "Happy New Year";
            }
            setTimeout(function () {
                value--
                if (value >= 0) {
                    id = document.getElementById("count")
                    id.innerHTML = value
                }
                if (value == 0) {
                    id.innerHTML = "Happy New Year";
                }

                setTimeout(function () {
                    value--
                    if (value >= 0) {
                        id = document.getElementById("count")
                        id.innerHTML = value
                    }
                    if (value == 0) {
                        id.innerHTML = "Happy New Year";
                    }

                    setTimeout(function () {
                        value--
                        if (value >= 0) {
                            id = document.getElementById("count")
                            id.innerHTML = value
                        }
                        if (value == 0) {
                            id.innerHTML = "Happy New Year";
                        }
                        setTimeout(function () {
                            value--
                            if (value >= 0) {
                                id = document.getElementById("count")
                                id.innerHTML = value
                            }
                            if (value == 0) {
                                id.innerHTML = "Happy New Year";
                            }
                            setTimeout(function () {
                                value--
                                if (value >= 0) {
                                    id = document.getElementById("count")
                                    id.innerHTML = value
                                }
                                if (value == 0) {
                                    id.innerHTML = "Happy New Year";
                                }

                                setTimeout(function () {
                                    value--
                                    if (value >= 0) {
                                        id = document.getElementById("count")
                                        id.innerHTML = value
                                    }
                                    if (value == 0) {
                                        id.innerHTML = "Happy New Year";
                                    }

                                    setTimeout(function () {
                                        value--
                                        if (value >= 0) {
                                            id = document.getElementById("count")
                                            id.innerHTML = value
                                        }
                                        if (value == 0) {
                                            id.innerHTML = "Happy New Year";
                                        }

                                    }, 1000);

                                }, 1000);



                            }, 1000);


                        }, 1000);


                    }, 1000);

                }, 1000);

            }, 1000);


        }, 1000);

    }, 1000);


}, 1000);
