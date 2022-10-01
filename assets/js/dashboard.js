const  openModalButton  =  document . querySelector ( "#open-modal" ) ;
const  closeModalButton  =  document . querySelector ( "#close-modal" ) ;
const  modal  =  documento . querySelector ( "#modal" ) ;
const  fade  =  documento . querySelector ( "#fade" ) ;

const  alternânciaModal  =  ( )  =>  {
  modal . classList . alternar ( "esconder" ) ;
  desaparecer . classList . alternar ( "esconder" ) ;
} ;

[ openModalButton ,  closeModalButton ,  fade ] . forEach ( ( el )  =>  {
  el . addEventListener ( "clique" ,  ( )  =>  toggleModal ( ) ) ;
} ) ;