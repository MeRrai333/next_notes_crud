const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt');
const prisma = new PrismaClient()

const load = async() => {
    try{
        const notes = await prisma.notes.createMany({
            data: [
                {
                    title: "Title 1",
                    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum nunc ut erat dictum euismod. Nulla at dui molestie, commodo leo vel, pretium lorem. Nulla lectus ligula, sodales eget dui eget, eleifend consectetur urna. Sed eu tellus eu dolor bibendum vulputate id in ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor est tellus, id maximus ipsum tristique et. Pellentesque bibendum magna id scelerisque sollicitudin. Curabitur eu gravida nisl. Mauris pretium ut neque eget faucibus. Aenean orci leo, iaculis et iaculis ac, accumsan at nunc. Nunc pulvinar metus in vulputate pulvinar. Nulla vel purus id nunc pretium faucibus eu ac lorem. Donec semper semper sem sed scelerisque. Donec cursus metus at tortor mollis, quis consequat sapien finibus. Donec dictum eu tellus sed fermentum. ",
                    
                },
                {
                    title: "Title 2",
                    note: "Mauris quis commodo libero. Curabitur vitae elit eget quam efficitur hendrerit finibus dignissim sem. Ut sed urna enim. Maecenas semper sagittis velit. Donec tincidunt nisl non dictum congue. In nulla metus, mollis in feugiat et, vehicula in risus. Nullam bibendum tempor nisi, a fermentum eros. In faucibus ex vel enim dictum elementum. Praesent pharetra orci porta, facilisis lorem ac, auctor dolor. Donec non justo non quam elementum mollis sit amet vel lacus. Vestibulum luctus scelerisque libero, id pellentesque neque vulputate eget. Sed sapien metus, vulputate sed hendrerit eu, ullamcorper vel urna. ",
                    
                },
                {
                    title: "Title 3",
                    note: "Fusce ut pharetra felis. Fusce cursus erat vitae elementum facilisis. Vestibulum ut lacus ac leo maximus dapibus. Mauris et auctor velit, eu lobortis felis. In ultricies risus id ipsum gravida faucibus finibus sit amet metus. Etiam nisi neque, efficitur a magna vel, sagittis pretium dolor. Integer convallis velit magna, ut ultrices erat tempor at. Nam dui nibh, luctus ac aliquet in, condimentum id velit. Aliquam egestas tempus dui eget vulputate. Fusce nunc ante, facilisis tempus justo quis, fermentum semper arcu. Nam a massa ullamcorper, feugiat nibh vel, porta lorem. Cras dapibus, nisi dignissim elementum efficitur, est risus semper nibh, ac elementum eros magna eu turpis. ",
                    
                },
                {
                    title: "Title 4",
                    note: "Proin bibendum ante at tristique ullamcorper. In hac habitasse platea dictumst. Suspendisse posuere posuere ornare. Ut odio sem, dapibus a ipsum sit amet, vehicula feugiat mauris. Donec pretium, neque tempus aliquam vulputate, nisi mi tincidunt quam, eu luctus neque augue et urna. Sed feugiat nulla in lectus posuere laoreet. Nulla pellentesque quis erat sed accumsan. Nam arcu ipsum, posuere quis libero a, scelerisque feugiat dui. Donec volutpat elit massa, sed efficitur massa lacinia euismod. Nullam sed purus vitae ipsum dignissim ullamcorper sit amet id leo. Nullam vestibulum aliquam lacus nec venenatis. Vivamus dictum facilisis nibh in sagittis. In ut urna vitae neque suscipit blandit. Praesent tincidunt odio libero, id faucibus massa viverra sed. Etiam sit amet ex at ante ullamcorper molestie vitae vel nisl. ",
                    
                },
                {
                    title: "Title 5",
                    note: "Aenean congue sapien porttitor magna vestibulum ultricies. Pellentesque sed metus quis augue faucibus pellentesque. Etiam consequat libero non metus viverra efficitur ut a mi. Duis nec pretium tortor. Donec sed ligula vitae nibh varius commodo non at risus. Cras a iaculis libero. Aliquam congue quam in leo ultrices, blandit ornare velit condimentum. Nullam ac molestie mi, euismod elementum nibh. Curabitur sit amet felis dictum, porttitor erat non, tristique lacus. Aliquam erat volutpat. Vivamus sit amet purus in velit feugiat rhoncus at at nisl. Nullam sagittis justo eu ornare consequat. Vestibulum mollis neque tellus, scelerisque pretium dolor tincidunt eu. Curabitur convallis, lacus ut tempus vulputate, dolor odio tempus ante, in tristique velit enim sed tellus. ",
                    
                },
            ]
        })
        console.log("Inserted!")
    }
    catch(e){
        console.log(e)
    }
}

load();