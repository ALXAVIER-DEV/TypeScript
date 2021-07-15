interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario {
    return { 
        nome: "Alexandre",
        email: "alexandrexavier@outlook.com"
    }
}

function setUser(usuario: Usuario){
    //....
}