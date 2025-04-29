module.exports = (body_map) => {
    return (req, res, next) => {
        if (Array.isArray(body_map)) {
            body_map = { body: body_map };
        }
        req.body = filter(body_map, "body", req.body);
        next();
    };
};

function filter(object_map, main_key, object) {
    let new_object = {};
    if (object_map[main_key])
        object_map[main_key].forEach((key) => {
            if (object[key] !== undefined) {
                if (
                    typeof object[key] === "object" ||
                    object[key] instanceof Object ||
                    typeof object[key] === "string" ||
                    object[key] instanceof String ||
                    typeof object[key] === "number" ||
                    object[key] instanceof Number ||
                    typeof object[key] === "boolean" ||
                    object[key] instanceof Boolean ||
                    Array.isArray(object[key]) ||
                    object[key] === null
                ) {
                    new_object[key] = object[key];
                } else {
                    new_object[key] = filter(object_map, key, object[key]);
                }
            }
        });
    return new_object;
}
