import scrapy

class PostsSpider(scrapy.Spider):
    name = "posts"

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

        self.start_urls = [f"https://scholar.google.com/citations?user={self.user_id}"]
        # self.start_urls = [f"https://scholar.google.com/citations?view_op=list_works&cstart=0&pagesize=80&user={self.user_id}"]


    
    def parse(self, response):
        for post in response.css('div#gsc_bdy'):
            yield {
                'name': post.css('div#gsc_prf_in::text').get(),
                'image': post.css('img#gsc_prf_pup-img').get(),
                'position': post.css('div.gsc_prf_il::text')[0].get(),
                'place': post.css('a.gsc_prf_ila::text').get(),
                'contact': post.css('div.gsc_prf_il::text')[1].get(),
                'interest': post.css('div#gsc_prf_int.gsc_prf_il a::text').getall(),
                'publication_title':post.css('#gsc_a_b tr td.gsc_a_t a::text').getall(),
                'publication_author': post.css('#gsc_a_b tr td.gsc_a_t div.gs_gray::text').getall(),
                'citations': post.css('#gsc_a_b tr td.gsc_a_c a::text').getall(),
                'pub_year': post.css('#gsc_a_b tr td.gsc_a_y span::text').getall(),
            }

