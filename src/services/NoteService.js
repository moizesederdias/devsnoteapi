const db = require('../db');

module.exports = {

    getAll: ()=>{

        return new Promise( ( resolve, reject )=>{

            db.query('select * from notes', ( error, results )=>{

                if(error){ reject(error); return;  }
                    resolve(results);

            });
            
        });

    },
    findById: (id)=>{

        return new Promise( ( resolve, reject )=>{

            db.query('select * from notes where id=?',[id], ( error, results )=>{

                if(error){ reject(error); return;  }
                if(results.length>0){
                    resolve(results[0]);
                }else{
                    resolve(false);
                }                    

            });            

        });

    },
    add: ( title, body )=>{

        return new Promise( ( resolve, reject )=>{

            db.query('insert into notes( title, body ) values(?,?) ', [ title, body ], ( error, results )=>{

                if(error){ reject(error); return;  }

                resolve( results.insertId );

            });            

        });

        } ,

    update: ( id, title, body )=>{

        return new Promise( ( resolve, reject )=>{

            db.query('select * from notes where id=?',[id], ( error, results )=>{

                if(error){ reject(error); return;  }

                db.query('update notes set title=?, body=? where id=? ', [ title, body, id ], ( error, results )=>{

                    if(error){ reject(error); return;  }

                    resolve( results );

                });   
            });

        });

    },
    delete: ( id )=>{

        return new Promise( ( resolve, reject )=>{

            db.query('select * from notes where id=?',[id], ( error, results )=>{

                if(error){ reject(error); console.log('erro na execução'); return;  }

                if(results.length>0){

                    db.query('delete from notes where id=?',[id], ( error, results )=>{

                        if(error){ reject(error); return;  }

                        resolve(id);

                    });

                }else{

                    // console.log('não encontrou id');
                    resolve(false);

                }

            });
    
        });
    }

};