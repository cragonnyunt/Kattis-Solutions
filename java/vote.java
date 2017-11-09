import java.util.Scanner;

public class vote {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int cases = scan.nextInt();
		while (cases-- > 0) {
			int count = scan.nextInt();
			int[] votes = new int[count];
			int maxVote = Integer.MIN_VALUE;
			int sumVote = 0;
			int maxIndex = -1;
			boolean hasTwoMax = false;
			for (int i = 0; i < count; i++) {
				votes[i] = scan.nextInt();
				sumVote += votes[i];
				if (maxVote < votes[i]) {
					maxVote = votes[i];
					maxIndex = i + 1;
					hasTwoMax = false;
				} else if (maxVote == votes[i])
					hasTwoMax = true;
			}
			if (hasTwoMax)
				System.out.println("no winner");
			else if (maxVote > sumVote / 2)
				System.out.println("majority winner " + maxIndex);
			else
				System.out.println("minority winner " + maxIndex);
		}
		scan.close();
	}
}
