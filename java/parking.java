import java.util.Scanner;

public class parking {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int[] prices = new int[3];
		for (int i = 0; i < prices.length; i++)
			prices[i] = scan.nextInt();
		int[][] trucks = new int[3][2];
		int maxTruck = Integer.MIN_VALUE;
		for (int i = 0; i < 3; i++)
			for (int j = 0; j < 2; j++)
				maxTruck = Math.max(maxTruck, trucks[i][j] = scan.nextInt());
		int[] path = new int[maxTruck];
		for (int i = trucks[0][0]; i < trucks[0][1]; i++)
			path[i] += 1;
		for (int i = trucks[1][0]; i < trucks[1][1]; i++)
			path[i] += 1;
		for (int i = trucks[2][0]; i < trucks[2][1]; i++)
			path[i] += 1;
		int result = 0;
		for (int item : path)
			if (item != 0)
				result += item * prices[item - 1];
		System.out.println(result);
		scan.close();
	}
}
