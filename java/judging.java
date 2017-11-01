import java.util.HashMap;
import java.util.Scanner;

public class judging {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		HashMap<String, Integer> domJudge = new HashMap<>(n);
		for (int i = 0; i < n; i++) {
			String result = scan.next();
			if (domJudge.containsKey(result))
				domJudge.put(result, domJudge.get(result) + 1);
			else
				domJudge.put(result, 1);
		}
		HashMap<String, Integer> kattisJudge = new HashMap<>(n);
		for (int i = 0; i < n; i++) {
			String result = scan.next();
			if (kattisJudge.containsKey(result))
				kattisJudge.put(result, kattisJudge.get(result) + 1);
			else
				kattisJudge.put(result, 1);
		}
		int count = 0;
		for (String s : domJudge.keySet()) {
			if (kattisJudge.containsKey(s))
				count += Math.min(domJudge.get(s), kattisJudge.get(s));
		}
		System.out.println(count);
		scan.close();
	}
}
