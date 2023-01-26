import * as SQLite from 'expo-sqlite';

const database=SQLite.openDatabase('cryptoLoggedInUserData.db');

export function init(){

    const promise=new Promise((resolve,reject)=>{
        database.transaction((tx)=>{
            tx.executeSql(`CREATE TABLE IF NOT EXISTS user(
                userId TEXT NOT NULL,
                username TEXT NOT NULL,
                name TEXT NOT NULL
            )`,
            [],
            ()=>{
                resolve();
            },
            (_,error)=>{
                reject(error);
            }
            )
        })
    });

    return promise;
}


export function insertUserData(userData){
    const promise=new Promise((resolve, reject) => { 
        database.transaction(tx=>{
            tx.executeSql(`INSERT INTO user (userId,username,name) values(?,?,?)`,
            [userData.userId,userData.username,userData.name],
            (_,result)=>{
                console.log(result);
                resolve(result);
            },
            (_,error)=>{
                reject(error);
            },
            )
        })
    })

    return promise;
}

export function fetchUserData(){
    const promise=new Promise((resolve, reject) => { 
        database.transaction(tx=>{
            tx.executeSql(`select * from user`,
            [],
            (_,result)=>{
                resolve(result);
            },
            (_,error)=>{
                reject(error);
            },
            )
        })
    })

    return promise;
}

export function clearUserData(){
    const promise=new Promise((resolve, reject) => { 
        database.transaction(tx=>{
            tx.executeSql(`delete from user`,
            [],
            (_,result)=>{
                resolve(result);
            },
            (_,error)=>{
                reject(error);
            },
            )
        })
    })

    return promise;
}