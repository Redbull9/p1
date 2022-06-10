// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001030303030303030303030303030504060f0f0f0f0f0f0f0f0f0f0f0f0f0f07060f0f0f0f0f0f0f0f0f0f0f0f0f0f07060f0f0f0f0f0f0f0f0f0f0f0f0f0f07060f0f0f0f0f0f0f0f0f0f0f0f0f0f07060f0f0f0f0f0f0f0f0f0f0f0f0f0f07060f0f0f0e0f0f0f0f0f0f0f0f0f0f07060f0f0f0f0f0f0f0f0f0f0f0f0f0f07060f0f0f0f0f0f0f0f09080f0f0f0f07060f0f0f0f0f0f0f0f0b0a0f0f0f0f07060f0f0f0f0f0f0f0f0f0f0f0f0f0f07060f0f0f0f0f0f0f0f0f0f0f0f0f0f07060f0f0f0f0f0f0f0f0f0f0f0f0f0f07060f0f0f0f0f0f0f0f0f0f0f0f0f0f07060f0f0f0f0f0f0f0f0f0f0f0f0f0f07020d0d0d0d0d0d0d0d0d0d0d0d0d0d0c`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . 2 . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . 2 2 . . . . 2 
2 . . . . . . . . 2 2 . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.chestClosed,sprites.dungeon.floorLight0], TileScale.Sixteen);
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
