"use client"

import { useState, type KeyboardEvent } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EddyEngine() {
  const [aiTerm, setAiTerm] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [monicaChecked, setMonicaChecked] = useState(false)
  const [memfreeChecked, setMemfreeChecked] = useState(false)
  const [mitaChecked, setMitaChecked] = useState(false)
  const [xiaohongshuChecked, setXiaohongshuChecked] = useState(false)
  const [weixinChecked, setWeixinChecked] = useState(false)
  const [bilibiliChecked, setBilibiliChecked] = useState(false)
  const [douyinChecked, setDouyinChecked] = useState(false)

  const performAiSearch = () => {
    if (!monicaChecked && !memfreeChecked && !mitaChecked) {
      alert("Please select at least one AI")
      return
    }

    if (monicaChecked) {
      window.open(`https://s.monica.im/search?q=${encodeURIComponent(aiTerm)}`, "_blank")
    }
    if (memfreeChecked) {
      window.open(`https://www.memfree.me/search?q=${encodeURIComponent(aiTerm)}`, "_blank")
    }
    if (mitaChecked) {
      window.open(`https://metaso.cn/?q=${encodeURIComponent(aiTerm)}`, "_blank")
    }
  }

  const performSearch = () => {
    if (!xiaohongshuChecked && !weixinChecked && !bilibiliChecked && !douyinChecked) {
      alert("Please select at least one search engine")
      return
    }

    if (xiaohongshuChecked) {
      window.open(`https://www.xiaohongshu.com/search_result?keyword=${encodeURIComponent(searchTerm)}`, "_blank")
    }
    if (weixinChecked) {
      window.open(
        `https://weixin.sogou.com/weixin?ie=utf8&s_from=input&_sug_=n&_sug_type_=1&type=2&query=${encodeURIComponent(searchTerm)}`,
        "_blank",
      )
    }
    if (bilibiliChecked) {
      window.open(`https://search.bilibili.com/all?vt=35209466&keyword=${encodeURIComponent(searchTerm)}`, "_blank")
    }
    if (douyinChecked) {
      window.open(`https://www.douyin.com/search/${encodeURIComponent(searchTerm)}`, "_blank")
    }
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>, action: () => void) => {
    if (e.key === "Enter") {
      action()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center p-8">
      <Card className="w-full max-w-4xl shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
          <CardTitle className="text-4xl font-bold text-center">Eddy Engine</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <Tabs defaultValue="ai" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 gap-4 p-1 bg-gray-100 rounded-lg h-16">
              <TabsTrigger
                value="ai"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-lg font-semibold h-full"
              >
                AI Search
              </TabsTrigger>
              <TabsTrigger
                value="search"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-lg font-semibold h-full"
              >
                Social Media Search
              </TabsTrigger>
            </TabsList>
            <TabsContent value="ai" className="space-y-6">
              <div className="flex space-x-4">
                <Input
                  type="text"
                  placeholder="Enter your AI search term"
                  value={aiTerm}
                  onChange={(e) => setAiTerm(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, performAiSearch)}
                  className="flex-grow text-lg h-12"
                />
                <Button
                  onClick={performAiSearch}
                  className="px-8 text-lg font-semibold bg-blue-500 hover:bg-blue-600 h-12"
                >
                  Go
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="monica"
                    checked={monicaChecked}
                    onCheckedChange={(checked) => setMonicaChecked(checked as boolean)}
                  />
                  <Label htmlFor="monica" className="text-lg">
                    Monica
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="memfree"
                    checked={memfreeChecked}
                    onCheckedChange={(checked) => setMemfreeChecked(checked as boolean)}
                  />
                  <Label htmlFor="memfree" className="text-lg">
                    MemFree
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="mita"
                    checked={mitaChecked}
                    onCheckedChange={(checked) => setMitaChecked(checked as boolean)}
                  />
                  <Label htmlFor="mita" className="text-lg">
                    秘塔
                  </Label>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="search" className="space-y-6">
              <div className="flex space-x-4">
                <Input
                  type="text"
                  placeholder="Enter your social media search term"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, performSearch)}
                  className="flex-grow text-lg h-12"
                />
                <Button
                  onClick={performSearch}
                  className="px-8 text-lg font-semibold bg-purple-500 hover:bg-purple-600 h-12"
                >
                  <Search className="mr-2 h-5 w-5" /> Search
                </Button>
              </div>
              <div className="flex flex-wrap justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="xiaohongshu"
                    checked={xiaohongshuChecked}
                    onCheckedChange={(checked) => setXiaohongshuChecked(checked as boolean)}
                  />
                  <Label htmlFor="xiaohongshu" className="text-lg">
                    小红书
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="weixin"
                    checked={weixinChecked}
                    onCheckedChange={(checked) => setWeixinChecked(checked as boolean)}
                  />
                  <Label htmlFor="weixin" className="text-lg">
                    微信
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="bilibili"
                    checked={bilibiliChecked}
                    onCheckedChange={(checked) => setBilibiliChecked(checked as boolean)}
                  />
                  <Label htmlFor="bilibili" className="text-lg">
                    Bilibili
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="douyin"
                    checked={douyinChecked}
                    onCheckedChange={(checked) => setDouyinChecked(checked as boolean)}
                  />
                  <Label htmlFor="douyin" className="text-lg">
                    抖音
                  </Label>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

