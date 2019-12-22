export const suggestion = [
    { label: 'Karachi' },
    { label: 'Lahore' },
    { label: 'Peshawar' },
    { label: 'Quetta' },
    { label: 'Islamabad' },
    { label: 'Faislabad' },
    { label: 'Rawalpindi' },
    { label: 'Multan' },
    { label: 'Hyderabad' },
    { label: 'Sukkur' },
    { label: 'Nawabshah' },
    { label: 'Gujranwala' },
    { label: 'Bhawalpur' },
    { label: 'Larkana' },
    { label: 'Sialkot' },
    { label: 'Mardan' },
    { label: 'Sawat' },
    
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));

export const groupedOptions = [
    {
        label: 'Current Location',
        options: [{ label: 'Current Location', value: 'Current Location' }]
    },
    {
        label: 'All of Pakistan',
        options: [{ label: 'All of Pakistan', value: 'All of Pakistan' }]
    },
    {
        label: 'Cities',
        options: suggestion,
    },
];
