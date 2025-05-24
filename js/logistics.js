document.addEventListener('DOMContentLoaded', function () {
    // Services data
    const services = [
        {
            title: "Air Freight",
            icon: "fa-plane",
            description: "Mondial Air Freight re-defines the dynamics of supply chain management, infusing flexibility and speed to meet the diverse needs of our customers. Through innovative solutions that yield tangible results, our standard Air Freight products, coupled with customizable options, introduce a new level of adaptability to your supply chain.",
            details: [
                "Our commitment extends beyond mere transportation, whether safeguarding sensitive cargo or enhancing supply chain visibility with cutting-edge online tracking tools, Mondial Air Freight experts prioritize building trust while safeguarding your shipments.",
                "We engage in active listening, continuous learning, and foster close partnerships to identify your unique needs and comprehend your strategic goals.",
                "Entrust your cargo to Mondial's seasoned team of Air Freight specialists, dedicated to fulfilling your daily priorities for time, space, frequency, and cost.",
                "Experience Mondial's distinctive brand of Personal Service, where expertise meets personalized attention to elevate your air freight experience."
            ]
        },

        {
            title: "Ocean Freight",
            icon: "fa-ship",
            description: "At MONDIAL, our sea freight services are a reliable combination, strategically leveraging cost and time savings for your business. We collaborate closely with your industry experts to gain a comprehensive understanding of your unique supply chain requirements, allowing us to implement tailored solutions that yield meaningful results.",
            details: [
                "Our Sea Freight specialists at MONDIAL go above and beyond, whether it's reserving an oversize container or ensuring the secure transportation of high-value cargo. Each shipment is handled with meticulous care and attention, aiming to earn and maintain your trust in our services.",
                "Our sea freight management experts take a hands-on approach, partnering with you to intimately understand the intricacies of your business.",
                "Armed with this knowledge, we draw upon a range of standard Sea Freight products and supplementary options to secure optimal space allocation, precise timing, frequency, and rates that align seamlessly with your objectives.",
                "At MONDIAL, we are dedicated to delivering efficient and effective sea freight solutions that meet the unique demands of your supply chain."
            ]
        },

        {
            title: "Land Transport",
            icon: "fa-truck",
            description: "At Mondial, our Road Freight services are designed to meticulously select the optimal distribution strategy for your needs. We offer a seamless blend of standardized Road Freight products with customizable options, ensuring the perfect balance of lead-time, capacity, frequency, and cost.",
            details: [
                "Our approach goes beyond mere transportation logistics; we strive to be a trusted partner deeply invested in understanding your business goals and the specific challenges of your region.",
                "With Mondial, you experience a brand of Personal Service built on clear communication, thoughtful collaboration, and dedicated follow-through.",
                "Our Road Freight management teams are committed to comprehending your objectives and devising tailored solutions that not only meet but exceed your expectations.",
                "Whether it involves executing same-day deliveries or handling hazardous cargo, Mondial's freight specialists recognize the key to success lies in cultivating committed, collaborative customer relationships."
            ]
        },
        {
            title: "Warehousing & Distribution",
            icon: "fa-warehouse",
            description: "At the core of Mondial's triumphant supply chain solutions lie our Warehousing & Distribution Integrated Capabilities, serving as the pulsating force that propels efficiency.",
            details: [
                "Our comprehensive offerings encompass full-service management, seamlessly integrating with road, air, sea, and sea/air freight forwarding products.",
                "Fueled by advanced technology and strategically located facilities, our experts possess the resources and acumen to translate strategic plans into actionable results.",
                "From initial consulting to meticulous oversight of the delivery process, Mondial remains tirelessly committed until your products safely reach the hands of your customers.",
                "With a dedication to excellence, cutting-edge logistics solutions, and a commitment to customer satisfaction, Mondial ensures a seamless and reliable journey for your goods throughout the entire supply chain."
            ]
        },
        {
            title: "Sports & Event Logistics",
            icon: "fa-basketball-ball",
            description: "Mondial Group is at the epitome of excellence in Sports and Event Logistics, with a distinguished portfolio boasting clients such as ZEE TV, Star Sports, Ten Sports, and many more.",
            details: [
                "Mondial stands as the undisputed expert in delivering seamless and memorable experiences for high-profile sports and entertainment events.",
                "From the roar of the crowd to the precision of logistics, Mondial Group ensures every moment is flawlessly orchestrated, leaving an indelible mark on the world of sports and entertainment.",
                "With a proven track record and a commitment to excellence, Mondial Group is your go-to partner for elevating your logistics handling experience to extraordinary heights."
            ]
        }

    ];

    // Populate services
    const servicesContainer = document.querySelector('.services-container');

    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';

        serviceCard.innerHTML = `
            <div class="service-icon">
                <i class="fas ${service.icon}"></i>
            </div>
            <div class="service-content">
                <h3>${service.title}</h3>
                <p class="service-description">${service.description}</p>
                <ul class="service-details">
                    ${service.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
        `;

        servicesContainer.appendChild(serviceCard);
    });
});