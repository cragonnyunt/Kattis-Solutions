import java.util.Scanner;

public class wordsfornumbers {
	static final String[] ws = { "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
			"eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" };
	static final String[] tenth = { "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" };
	static final String[] digits = { "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" };

	static boolean isNumber(String str) {
		for (char ch : str.toCharArray())
			if (ch < '0' || ch > '9')
				return false;
		return true;
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		while (scan.hasNextLine()) {
			String text = scan.nextLine();
			String[] words = text.split(" ");
			for (int i = 0; i < words.length; i++) {
				if (isNumber(words[i])) {
					int num = Integer.parseInt(words[i]);
					if (num < 20) {
						words[i] = ws[num];
					} else {
						if (num % 10 == 0) {
							words[i] = tenth[num / 10 - 2];
						} else {
							words[i] = tenth[num / 10 - 2] + "-" + digits[num % 10 - 1];
						}
					}
				}
			}
			words[0] = words[0].substring(0, 1).toUpperCase() + words[0].substring(1);
			for(String s : words)
				System.out.print(s + " ");
			System.out.println();
		}
		scan.close();
	}
}
