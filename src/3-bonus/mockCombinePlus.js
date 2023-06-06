const data = {
    g:'',
    w:''
};

export default function(greeting, who) {
    data.g = greeting;
    data.w = who;
    return `${greeting} "${who}"`;
}

export function getParams() {
    return JSON.stringify(data);
}