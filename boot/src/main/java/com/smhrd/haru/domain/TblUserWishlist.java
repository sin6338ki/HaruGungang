package com.smhrd.haru.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class TblUserWishlist {
	
	private String user_id;
	private String product_id;

}
