function generateOptions(options) {
        return Object.entries(options)
                .map(([code, currency]) => `<option value="${code}">${code} - ${currency}</option>`)
                .join('');
}

function formatCurrency(amount, currency) {
        return Intl.NumberFormat('en-US', {
                style: 'currency',
                currency,
        }).format(amount);
}

export { generateOptions, formatCurrency };
