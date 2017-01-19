const PI = Math.PI;

// Exportacion individual
// exports.area = function(r) {
//     return PI * r * r;
// }

// exports.circumference = function(r) {
//     return 2 * PI * r;
// }

// Exportacion modular
module.exports = function(r) {
    return {
        area: function() {
            return PI * r * r;
        },
        circumference: function() {
            return 2 * PI * r;
        }
    }
}
