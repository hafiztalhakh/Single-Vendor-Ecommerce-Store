export const Mobiles = [
    { label: 'Tablets' },
    { label: 'Accessories' },
    { label: 'Mobile Phones' }
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));

export const Vehicles = [
    { label: 'Cars' },
    { label: 'Cars on Installments' },
    { label: 'Cars Accessories' },
    { label: 'Spare Parts' },
    { label: 'Buses, Vans & Trucks' },
    { label: 'Other Vehicles' },
    { label: 'Boats' },
    { label: 'Tractors & Trailers' },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));

export const PropertyForSale = [
    { label: 'Land & Plots for Sale' },
    { label: 'Houses for Sale' },
    { label: 'Apartments & Flats for Sale' },
    { label: 'Shops - Offices - Commercial Space for Sale' },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));

export const PropertyForRent = [
    { label: 'Houses for Rent' },
    { label: 'Apartments & Flats for Rent' },
    { label: 'Portions & Floors for Rent' },
    { label: 'Shops - Offices - Commercial Space for Rent' },
    { label: 'Roommates & Paying Guests for Rent' },
    { label: 'Vacation Rentals - Guest Houses for Rent' },
    { label: 'Land & Plots for Rent' },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));

export const ElectronicsAndHomeAppliances = [
    { label: 'Computers & Accessories' },
    { label: 'TV -Video -Audio' },
    { label: 'Cameras & Accessories' },
    { label: 'Gmaes & Entertainment' },
    { label: 'Other Home Appliances' },
    { label: 'Generator, UPS & Power Solutions' },
    { label: 'Kitchen Appliances' },
    { label: 'AC & Coolers' },
    { label: 'Fridges & Freezers' },
    { label: 'Washing Machines & Dryers ' },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));

export const Bikes = [
    { label: 'Motorcycles' },
    { label: 'Bicycles' },
    { label: 'ATV & Quads' },
    { label: 'Spare Parts' },
    { label: 'Scooters' }, 
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));

export const Business = [
    { label: 'Businness for Sale' },
    { label: 'Food & Restaurants' },
    { label: 'Trade & Industrial' },
    { label: 'Agriculture' },
    { label: 'Construction & Heavy Machinery' },
    { label: 'Other Business & Industry' },
    { label: 'Medical & Pharma' },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));

export const Services = [
    { label: 'Education & Classses' },
    { label: 'Travel & Visa' },
    { label: 'Car Rental' },
    { label: 'Drivers & Taxi' },
    { label: 'Web Development' },
    { label: 'Other Services' },
    { label: 'Electronics & Computer Repair' },
    { label: 'Event Services' },
    { label: 'Health & Beauty' },
    { label: 'Maids & Domestic Help' },
    { label: 'Movers & Packages' },
    { label: 'Home and Office Repair' },
    { label: 'Catering & Restaurant' },
    { label: 'Farm & Fresh Food' },

].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));

export const Jobs = [
    { label: 'Online' },
    { label: 'Marketing' },
    { label: 'Advertising & PR' },
    { label: 'Education' },
    { label: 'Customer Service' },
    { label: 'Sales' },
    { label: 'IT & Networking' },
    { label: 'Hostels & Tourism' },
    { label: 'Clerical & Administration' },
    { label: 'Human Resources' },
    { label: 'Accounting & Finance' },
    { label: 'Manufacturing' },
    { label: 'Medical' },
    { label: 'Domestic Staff' },
    { label: 'Other Jobs' },
    
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));

export const Animals = [
    { label: 'Fish & Aquariums' },
    { label: 'Birds' },
    { label: 'Hens & Aseel' },
    { label: 'Cats' },
    { label: 'Dogs' },
    { label: 'Livestock' },
    { label: 'Hourses' },
    { label: 'Pet Food & Accessories' },
    { label: 'Other Animals' },
    
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));

export const Furniture = [
    { label: 'Sofa & Chairs' },
    { label: 'Beds & Wardrobes' },
    { label: 'Home Decoration' },
    { label: 'Tables & Dinning' },
    { label: 'Gardenn & Outdoor' },
    { label: 'Painting & Mirros' },
    { label: 'Rugs & Carpets' },
    { label: 'Curtains & Blinds' },
    { label: 'Office Furniture' },
    { label: 'Other Household Items' },
    
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));

export const Fashion = [
   
    { label: 'Fashion Accessories' },
    { label: 'Clothes' },
    { label: 'Footwear' },
    { label: 'Jewellery' },
    { label: 'Make Up' },
    { label: 'Skin & Hair' },
    { label: 'Watches' },
    { label: 'Wedding' },
    { label: 'Lawn & Pret' },
    { label: 'Couture' },
    
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));

export const Hobbies = [
    { label: 'Books & Magazines' },
    { label: 'Musical Instruments' },
    { label: 'Sports Equipment' },
    { label: 'Gym & Fitneess' },
    { label: 'Other Hobbies' },
    
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));

export const Kids = [
    { label: 'Kids Furniture' },
    { label: 'Toys' },
    { label: 'Prams & Walkers' },
    { label: 'Swings & Slides' },
    { label: 'Kids Bikes' },
    { label: 'Kids Accessories' },
    
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));

export const groupedOptions = [
    {
        label: 'Mobiles',
        options: Mobiles,
    },
    {
        label: 'Vehicles',
        options: Vehicles,
    },
    {
        label: 'Property for Sale',
        options: PropertyForSale,
    },
    {
        label: 'Property for Rent',
        options: PropertyForRent,
    },
    {
        label: 'Electronics & Home Appliances',
        options: ElectronicsAndHomeAppliances,
    },
    {
        label: 'Bikes',
        options: Bikes,
    },
    {
        label: 'Business, Industrial & Agriculture',
        options: Business,
    },
    {
        label: 'Services',
        options: Services,
    },
    {
        label: 'Jobs',
        options: Jobs,
    },
    {
        label: 'Animals',
        options: Animals,
    },
    {
        label: 'Furniture & Home Decor',
        options: Furniture,
    },
    {
        label: 'Fashion & Beauty',
        options: Fashion,
    },
    {
        label: 'Books, Sports & Hobbies',
        options: Hobbies,
    },
    {
        label: 'Kids',
        options: Kids,
    },
    
];


