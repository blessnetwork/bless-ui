cd src/components/ui

# Button
sed -i '' 's/export default Button/export const Button =/' button.tsx
echo -e "\nexport { Button }" >> button.tsx

# Card Section
sed -i '' 's/export default CardSection/export const CardSection =/' card-section.tsx
echo -e "\nexport { CardSection }" >> card-section.tsx

# Chart Bar
sed -i '' 's/export default ChartBar/export const ChartBar =/' chart-bar.tsx
echo -e "\nexport { ChartBar }" >> chart-bar.tsx

# Header
sed -i '' 's/export default Header/export const Header =/' header.tsx
echo -e "\nexport { Header }" >> header.tsx

# Header Mobile
sed -i '' 's/export default HeaderMobile/export const HeaderMobile =/' header-mobile.tsx
echo -e "\nexport { HeaderMobile }" >> header-mobile.tsx

# Input
sed -i '' 's/export default Input/export const Input =/' input.tsx
echo -e "\nexport { Input }" >> input.tsx

# Popover
sed -i '' 's/export default Popover/export const Popover =/' popover.tsx
echo -e "\nexport { Popover }" >> popover.tsx
