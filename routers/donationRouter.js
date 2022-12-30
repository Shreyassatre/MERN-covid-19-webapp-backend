const router = require("express").Router();
const Payment = require("../models/paymentModel");
const shortid = require('shortid')
const Razorpay = require('razorpay')


const razorpay = new Razorpay({
	key_id: 'rzp_test_b5RTY86xi0zElh',
	key_secret: 'FAByfxFhXvo2m9uGLvSewf3A'
})

router.post("/", async (req, res)=>{

    try {


    const payment_capture = 1
    const currency = 'INR'
    const amount= 300;

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}

	
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}

    try{
        const {name, email, phone, address, amount} = req.body;
  
        const newPayment = new Payment({
            name,
            email, 
            phone,
            address,
            amount
        });

        await newPayment.save();
  
    } catch (err) {
        console.error(err);
        res.status(500).send(); 
    }
  });

  router.get("/", async (req, res) => {
    try {
      const donations = await Payment.find({}).sort({"date":-1});
      res.json(donations);
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  });

  module.exports = router;