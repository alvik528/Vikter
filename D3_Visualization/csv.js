var prices_csv = function()
{
    /*
    d3.csv("data.csv", function(prices)
    {
        //prices is an array of json objects containing the data in from the csv
        console.log("prices:", prices)
        data = prices.map(function(d)
        {
            //each d is one line of the csv file represented as a json object
            console.log("d", d)
            month = parse(d.month).getMonth();
            console.log("month:", d.month, month)
            //we slice the dollar sign off then convert to a number with the + sign
            //slicing works like "$216".slice(1) gives you 216, 
            //you can also give it a range like "$216 asdf".slice(1,4) gives you 216
            p = d.price
            price = +p.slice(1)
            console.log("price:", p, price);
            return {"month": month, "value":price} ;
        })
        console.log("data", data)
    })
    */
    d3.csv("data.csv", function(data) {
        var arrays = [];
        data.forEach(function(d) {
            {
                arrays.push(d);
            }
        });
        console.log(arrays);
    });
    //.row(function(d) { return {key: d.key, value: +d.value}; })
    //.get(function(error, rows) { console.log(rows); });
}
