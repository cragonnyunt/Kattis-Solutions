import java.math.BigInteger;
import java.util.HashMap;
import java.util.Scanner;

public class anagramcounting {
	static BigInteger[] factorials = new BigInteger[101];
	static {
		factorials[0] = new BigInteger("1");
		for (int i = 1; i < factorials.length; i++)
			factorials[i] = factorials[i - 1].multiply(BigInteger.valueOf(i + 1));
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		while (scan.hasNext()) {
			String input = scan.next();
			HashMap<Character, Integer> char_map = new HashMap<>();
			for (char c : input.toCharArray())
				char_map.put(c, char_map.containsKey(c) ? char_map.get(c) + 1 : 1);
			BigInteger numerator = factorials[input.length() - 1];
			for (char c : char_map.keySet()) {
				if(char_map.get(c) > 1)
					numerator = numerator.divide(factorials[char_map.get(c) - 1]);
			}
			System.out.println(numerator);
		}
		scan.close();
	}
}
