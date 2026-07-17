const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

// Enhanced Ayurvedic Mock Inventory matching the specified site catalog data metrics
const herbalInventory = [
    { 
        id: 201, 
        title: "पंत श्री™ अर्थराइटिस कोम्बो ( Arthritis Combo )", 
        price: 589.00, 
        rating: "4.8",
        bestSeller: true,
        description: "दर्द, सूजन, अकड़न और मांसपेशियों की कमजोरी से प्राकृतिक राहत।",
        img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400" 
    },
    { 
        id: 202, 
        title: "पंत श्री™ वेट लॉस कॉम्बो ( सी बकथॉर्न जूस + कैप्सूल )", 
        price: 1029.00, 
        rating: "4.8",
        bestSeller: true,
        description: "चर्बी को प्राकृतिक रूप से कम करें, वजन घटाने और थकान दूर करने में सहायक।",
        img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400" 
    },
    { 
        id: 203, 
        title: "पंत श्री™ आर्थराइटिस केयर कॉम्बो प्रीमियम", 
        price: 799.00, 
        rating: "4.7",
        bestSeller: false,
        description: "विशेष रूप से घुटने, पीठ और पुराने जोड़ों के दर्द को दूर करने के लिए निर्मित।",
        img: "https://images.unsplash.com/photo-1611070973770-b1a6726b0c6e?w=400" 
    },
    { 
        id: 204, 
        title: "Pant Shri Piles Care & Constipation Combo", 
        price: 1050.00, 
        rating: "4.9",
        bestSeller: true,
        description: "An Ayurvedic herbal combo designed to support relief from chronic digestive issues.",
        img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400" 
    }
];

// Serve storefront template view
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve inventory array
app.get('/api/inventory', (req, res) => {
    res.json(herbalInventory);
});

// Process system checkout
app.post('/api/checkout-session', (req, res) => {
    const { items } = req.body;
    
    console.log("\n🌿 =================================================== 🌿");
    console.log("             [AUSHADHI KUNJ HARBAL - LOCAL GATEWAY]            ");
    console.log("🌿 =================================================== 🌿");
    console.log(`⏱️ Timestamp: ${new Date().toLocaleTimeString()}`);
    console.log(`📦 Active Basket Items Count: ${items.length}`);
    console.log("---------------------------------------------------------");
    console.log(JSON.stringify(items, null, 2));
    console.log("🌿 =================================================== 🌿\n");

    res.json({ 
        success: true, 
        trackingId: `AKH-ORD-${Math.floor(Math.random() * 900000) + 100000}` 
    });
});

app.listen(PORT, () => {
    console.log(`\n💚 Herbal Store Online on your Local Machine!`);
    console.log(`👉 View layout inside Ubuntu here: http://localhost:${PORT}\n`);
});