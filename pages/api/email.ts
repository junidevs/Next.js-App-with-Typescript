export default (req:any,res:any) =>{

    const body = JSON.parse(req.body);
    console.log('Email has been send with these data : ',body)
    res.status(200).json({message: 'works'})

    //from this point we could send emails to users
}