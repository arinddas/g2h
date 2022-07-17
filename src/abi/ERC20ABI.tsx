
export const ERC20ABI = [
    // Read-Only Functions
    "function balanceOf(address owner) external view returns (uint256)",
    "function totalSupply() external view returns (uint256)",
     "function decimals() external view returns (uint8)",
     "function symbol() external view returns (string)",
    // Authenticated Functions
    "function transfer(address to, uint256 amount) external returns (bool)",
    "function burn(uint amount) external returns (bool)",
     "function mint(uint amount) external returns (bool)",
    // Events
    "event Transfer(address indexed from, address indexed to, uint256 value)"
];
