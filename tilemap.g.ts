// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100001020202020a020202020a0202020203050707070707070707070a0707070704050707070707070707070a0a0a0a0704050707070707070707070707070707040a0a0a0a0a0a0707070707070707070405070707070a0707070707070707070405070707070a0a0a0a070707070a0a0a05070707070707070a07070a0a0707040507070707070b070a070707070707040a0a0a0a0a0a0707070707070707070405070707070707070707070707070704050707070707070707070707070707040a0a0a0a0a0a0a0a0a0a0a0a0a070704050707070707070707070707070707040507070707070707070707070707070406080808080808080808080808080809`, img`
. . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 2 2 2 . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . . 2 2 2 2 . . . . 2 2 2 
. . . . . . . . 2 . . 2 2 . . . 
. . . . . . . . 2 . . . . . . . 
2 2 2 2 2 2 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles5,sprites.builtin.forestTiles6,sprites.builtin.forestTiles7,sprites.builtin.forestTiles11,sprites.builtin.forestTiles9,sprites.builtin.forestTiles13,sprites.builtin.forestTiles10,sprites.builtin.forestTiles14,sprites.builtin.forestTiles15,sprites.builtin.forestTiles3,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
