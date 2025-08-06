"use client"

import { useState, type KeyboardEvent } from "react"
import { Search, MessageCircle, Sparkles } from 'lucide-react'
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

  const handleTalkToAI = () => {
    window.open("https://gpt.100000.best/", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 sm:p-8">
      {/* Header with Talk to AI Button */}
      <div className="w-full max-w-4xl mb-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          
          
        </div>
        
        <Button
          onClick={handleTalkToAI}
          className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">Talk to AI</span>
          <span className="sm:hidden">AI</span>
          <Sparkles className="w-4 h-4 animate-pulse" />
        </Button>
      </div>

      {/* Main Card */}
      <Card className="w-full max-w-4xl shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-t-2xl p-8">
          <CardTitle className="text-4xl font-bold text-center tracking-tight">
            Eddy Engine
          </CardTitle>
          <p className="text-center text-blue-100 mt-2 text-lg">
            Advanced AI and Social Media Search Platform
          </p>
        </CardHeader>
        
        <CardContent className="p-8">
          <Tabs defaultValue="ai" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 gap-2 p-2 bg-gray-100/80 rounded-2xl h-16 backdrop-blur-sm">
              <TabsTrigger
                value="ai"
                className="data-[state=active]:bg-white data-[state=active]:shadow-md text-lg font-semibold h-full rounded-xl transition-all duration-300 data-[state=active]:scale-105"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                AI Search
              </TabsTrigger>
              <TabsTrigger
                value="search"
                className="data-[state=active]:bg-white data-[state=active]:shadow-md text-lg font-semibold h-full rounded-xl transition-all duration-300 data-[state=active]:scale-105"
              >
                <Search className="w-5 h-5 mr-2" />
                Social Media
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ai" className="space-y-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="text"
                  placeholder="Enter your AI search term..."
                  value={aiTerm}
                  onChange={(e) => setAiTerm(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, performAiSearch)}
                  className="flex-grow text-lg h-14 rounded-xl border-2 border-gray-200 focus:border-blue-400 transition-colors duration-300 px-6"
                />
                <Button
                  onClick={performAiSearch}
                  className="px-8 text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Search AI
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { id: "monica", label: "Monica", checked: monicaChecked, setter: setMonicaChecked },
                  { id: "memfree", label: "MemFree", checked: memfreeChecked, setter: setMemfreeChecked },
                  { id: "mita", label: "秘塔", checked: mitaChecked, setter: setMitaChecked },
                ].map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 border border-gray-200 hover:border-blue-300">
                    <Checkbox
                      id={item.id}
                      checked={item.checked}
                      onCheckedChange={(checked) => item.setter(checked as boolean)}
                      className="w-5 h-5"
                    />
                    <Label htmlFor={item.id} className="text-lg font-medium cursor-pointer">
                      {item.label}
                    </Label>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="search" className="space-y-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="text"
                  placeholder="Enter your social media search term..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, performSearch)}
                  className="flex-grow text-lg h-14 rounded-xl border-2 border-gray-200 focus:border-purple-400 transition-colors duration-300 px-6"
                />
                <Button
                  onClick={performSearch}
                  className="px-8 text-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Search Social
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { id: "xiaohongshu", label: "小红书", checked: xiaohongshuChecked, setter: setXiaohongshuChecked, color: "from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 border-red-200 hover:border-red-300" },
                  { id: "weixin", label: "微信", checked: weixinChecked, setter: setWeixinChecked, color: "from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 border-green-200 hover:border-green-300" },
                  { id: "bilibili", label: "Bilibili", checked: bilibiliChecked, setter: setBilibiliChecked, color: "from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 border-blue-200 hover:border-blue-300" },
                  { id: "douyin", label: "抖音", checked: douyinChecked, setter: setDouyinChecked, color: "from-gray-50 to-slate-50 hover:from-gray-100 hover:to-slate-100 border-gray-200 hover:border-gray-300" },
                ].map((item) => (
                  <div key={item.id} className={`flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r ${item.color} transition-all duration-300 border`}>
                    <Checkbox
                      id={item.id}
                      checked={item.checked}
                      onCheckedChange={(checked) => item.setter(checked as boolean)}
                      className="w-5 h-5"
                    />
                    <Label htmlFor={item.id} className="text-lg font-medium cursor-pointer">
                      {item.label}
                    </Label>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>© 2024 Eddy Engine. Powered by advanced AI technology.</p>
      </div>
    </div>
  )
}
