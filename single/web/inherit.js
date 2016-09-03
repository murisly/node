
/**
 * 创建新的对象
 */


exports.inherit = function(p) {
    if (p == null)
        throw TypeError;
    
    if (Object.create) {
        return Object.create(p);
    }
}