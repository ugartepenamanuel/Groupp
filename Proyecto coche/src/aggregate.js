

//....Selecciona cantidad mayor o igual a 150 y lo agrupa por  el id por modelo y la suma de la cantidad y ordena descendente ....//
db.coche.aggregate([
    { $match: { $expr: { $lte: [ "$Precio" , "$Precio_ventas" ] } }},
    { $group: { _id: { marca: "$Marca", modelo: "$Modelo"}, precio:{$avg: "$Precio"}, año:{$avg:"$Año"}}} ,
    { $project: {
        _id:1,
        IVA:  { $round:  { $multiply: ["$precio", 0.21 ]}}, 
        totalvIVA:   { $multiply: ["$precio", 1.21]} 
        
    }
    },
    { $sort: { total: -1 } }
   
]);



db.coche.aggregate([
         { $match: { $expr: { $lte: [ "$Precio" , "$Precio_ventas" ] } }},
       { $group: { _id: { marca: "$Marca", modelo: "$Modelo", precio:"$Precio", Año:"$Año" } } },

        { $sort: { total: -1 } }
     ]);


